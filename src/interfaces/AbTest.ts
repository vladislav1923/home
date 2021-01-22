import { AbTestStatuses } from '../enums/AbTestStatuses';

export interface AbTest {
    id: number;
    name: string;
    startDate: string;
    endDate: string;
    status: AbTestStatuses;
}
