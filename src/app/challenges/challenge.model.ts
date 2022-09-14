enum DayStatus {
  Open,
  Completed,
  Failed,
}

export interface Day {
  dayInMonth: number;
  dayInWeek: number;
  date: Date;
  status: DayStatus;
}

export interface Challenge {
  title: string;
  description: string;
  year: number;
  month: number;
  days: Day[];
}
