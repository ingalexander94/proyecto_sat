export interface Meet {
  _id: any;
  student: {
    nombre: String;
    correo: String;
    codigo: String;
  };
  postulation: String;
  state: String;
  ubication: String;
  date: Date;
  role: String;
  dateFormat: String;
}

export interface MeetResponse {
  ok: Boolean;
  data: Meet;
  msg: String;
}
