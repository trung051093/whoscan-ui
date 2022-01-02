import classNames from "classnames";
import React, { ReactElement } from "react";
import {
  Direction,
  DragDropContext,
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
  Droppable,
  DroppableMode,
  DroppableProvided,
  DropResult,
} from "react-beautiful-dnd";
import { ArrayServices } from "../../utils/array";

export interface DragDropContextProps<T> {
  internalScroll?: boolean;
  droppableId: string;
  itemIdPrefix: string;
  listClassName?: string;
  list: T[];
  mode?: DroppableMode;
  direction?: Direction;
  children: (
    dragProvided: DraggableProvided,
    snapshot: DraggableStateSnapshot,
    item: T,
    index: number
  ) => ReactElement;
  onDropEndCallback: (list: T[]) => void;
}

const Container: React.FC<any> = ({ listClassName, children }) => (
  <div className={`${listClassName}__container`}>{children}</div>
);

const DropZone: React.FC<any> = ({ dropProvided, listClassName, children }) => (
  <div className={`${listClassName}__dropzone`} ref={dropProvided.innerRef}>
    {children}
  </div>
);

const ScrollContainer: React.FC<any> = ({ listClassName, children }) => (
  <div className={`${listClassName}__scroll-container`}>{children}</div>
);

const DragDropContextWrapper = <T extends unknown>(
  props: DragDropContextProps<T> & {
    children(
      dragProvided: DraggableProvided,
      snapshot: DraggableStateSnapshot,
      item: T,
      index: number
    ): ReactElement;
  }
) => {
  const listClassName = classNames({
    list__wrapper: true,
    [props.listClassName || ""]: true,
  });

  const onDragStart = () => {
    // Add a little vibration if the browser supports it.
    // Add's a nice little physical feedback
    if (window.navigator.vibrate) {
      window.navigator.vibrate(100);
    }
  };

  const onDragEnd = (result: DropResult) => {
    // dropped outside the list
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const items = ArrayServices.reorder(
      props.list,
      result.source.index,
      destination.index
    );
    props.onDropEndCallback(items);
  };

  const renderList = (dropProvided: DroppableProvided) => {
    return (
      <Container listClassName={listClassName}>
        <DropZone listClassName={listClassName} dropProvided={dropProvided}>
          {props.list.map((item, index) => (
            <Draggable
              key={props.itemIdPrefix + "-" + index}
              draggableId={props.itemIdPrefix + "-" + index.toString()}
              index={index}
            >
              {(dragProvided, snapshot) => (
                <React.Fragment>
                  {props.children(dragProvided, snapshot, item, index)}
                </React.Fragment>
              )}
            </Draggable>
          ))}

          {dropProvided.placeholder}
        </DropZone>
      </Container>
    );
  };

  return (
    <React.Fragment>
      <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
        <Droppable
          direction={props.direction}
          droppableId={props.droppableId}
          mode={props.mode}
        >
          {(dropProvided) => (
            <div
              className={listClassName}
              {...dropProvided.droppableProps}
              ref={dropProvided.innerRef}
            >
              {props.internalScroll ? (
                <ScrollContainer listClassName={listClassName}>
                  {renderList(dropProvided)}
                </ScrollContainer>
              ) : (
                renderList(dropProvided)
              )}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </React.Fragment>
  );
};

export default DragDropContextWrapper;
