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
import { User } from "lucide-react";
import { useState } from "react";

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
          <Button type="submit" onClick={() => mutate(loginState)}>
            Login
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
