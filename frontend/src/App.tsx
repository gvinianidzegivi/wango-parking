import { Header } from "./components/Header";
import "./App.scss";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./components/ui/button";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="flex flex-col text-white items-center justify-center mt-64">
        <h1>Park your car</h1>
        <p className="text-center">
          After choosing the city please choose the parking are and hit "pay
          with Wango" button.
        </p>
        <div className="flex flex-col gap-2 my-2 md:flex-row">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Choose City" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Choose Parking Area" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button variant="destructive">PAY WITH WANGO</Button>
        </div>
      </div>
    </div>
  );
};
