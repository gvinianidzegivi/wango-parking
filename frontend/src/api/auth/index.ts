import axiosInstance from "@/lib/axiosInstance";
import type {
  LoginPayload,
  ParkingSession,
  ParkingStartPayload,
  ParkingStopPayload,
  RegisterPayload,
} from "@/types/auth.types";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useRegister = () => {
  return useMutation<unknown, Error, RegisterPayload>({
    mutationFn: (data: RegisterPayload) =>
      axiosInstance.post("/users/register", data),
  });
};

export const useLogin = () => {
  return useMutation<unknown, Error, LoginPayload>({
    mutationFn: (data: LoginPayload) =>
      axiosInstance.post("/users/login", data),
  });
};

export const useStartParking = () => {
  return useMutation<unknown, Error, ParkingStartPayload>({
    mutationFn: (data: ParkingStartPayload) =>
      axiosInstance.post("/parking/start", data),
  });
};

export const useStopParking = () => {
  return useMutation<unknown, Error, ParkingStopPayload>({
    mutationFn: (data: ParkingStopPayload) =>
      axiosInstance.post("/parking/stop", data),
  });
};

export const useParkingHistory = (email: string) => {
  return useQuery<unknown, Error, ParkingSession>({
    queryKey: ["parking-history", email],
    queryFn: async () => {
      const res = await axiosInstance.get(`parking/${email}/sessions`);
      return res.data;
    },
    enabled: !!email,
  });
};
