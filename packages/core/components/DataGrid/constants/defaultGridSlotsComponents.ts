import { GridSlotsComponent } from "../models/slots";
import { GridHeaderComponent } from "../components/GridHeader";
import { GridFooterComponent } from "../components/GridFooter";
import { GridRowComponent } from "../components/GridRow";
import { GridCellComponent } from "../components/GridCell";

export const DEFAULT_SLOTS_COMPONENTS: GridSlotsComponent = {
    Row: GridRowComponent,
    Header: GridHeaderComponent,
    Footer: GridFooterComponent,
    Cell: GridCellComponent,
}