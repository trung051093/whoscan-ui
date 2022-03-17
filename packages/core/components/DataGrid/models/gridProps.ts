import { GridColumn, GridRow, GridLocaleText, GridSlotsComponent, GridSlotsComponentProps } from ".";

export interface DataGridProps {
    columns: GridColumn[]
    rows: GridRow[]
    localeText: GridLocaleText
    components: Partial<GridSlotsComponent>
    componentsProps: Partial<GridSlotsComponentProps>
    hideFooter?: boolean
}

export interface GridProcessedProps extends Partial<DataGridProps> {
    components: GridSlotsComponent;
}