export interface RegisterPayload {
  email: string;
  full_name: string;
  address: string;
  car_plate: string;
}

export interface LoginPayload {
  email: string;
  car_plate: string;
}

export interface ParkingStartPayload {
  user_id: string;
  parking_area_id: string;
}

export interface ParkingStopPayload {
  user_id: string;
}

export interface ParkingSession {
  _id: string;
  user_id: string;
  parking_area_id: string;
  start_time: string;
  end_time?: string;
  calculated_price?: number;
}
