interface Task {
  _id?: string;
  name: string;
  description?: string;
  owner?: string;
  created?:Date;
  public?: boolean;
  assignedTo?: string;
  status?: string;
}

interface Comment {
  userId?: string;
  comment: string;
  created?: Date;
}
