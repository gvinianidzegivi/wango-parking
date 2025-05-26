import { useLogin } from "@/api/auth";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { AxiosError } from "axios";
import { User } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

type LoginT = {
  email: string;
  car_plate: string;
};

export const Login = () => {
  const { mutate } = useLogin();
  const [loginState, setLoginState] = useState<LoginT>({
    email: "",
    car_plate: "",
  });

  const handleLogin = () => {
    mutate(
      {
        email: loginState.email,
        car_plate: loginState.car_plate,
      },
      {
        onSuccess: (data) => {
          console.log("Login successful:", data);
        },
        onError: (error) => {
          const err = error as AxiosError<any>;
          const message = err.response?.data?.message || err.message;
          toast.error(`Login failed: ${message}`);
        },
      }
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <a className="text-white flex">
          <User />
          Login
        </a>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login </DialogTitle>
          <DialogDescription>Login to your account.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              className="col-span-3"
              onChange={(e) =>
                setLoginState({ ...loginState, email: e.target.value })
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="carNumber" className="text-right">
              Car Number
            </Label>
            <Input
              id="carNumber"
              className="col-span-3"
              onChange={(e) =>
                setLoginState({ ...loginState, car_plate: e.target.value })
              }
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleLogin}>
            Login
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
