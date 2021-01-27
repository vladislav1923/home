import { AbTestStatuses } from '../enums/ab-test-statuses';

export interface AbTest {
    id: number;
    name: string;
    startDate: string;
    endDate: string;
    status: AbTestStatuses;
}
