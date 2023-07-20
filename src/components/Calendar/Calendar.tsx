import { FC } from "react";
import ReactCalendar from "react-calendar";

interface indexProps {}

interface Datetype {
  justDate: Date | null;
  dateTime: Date | null;
}

const index: FC<indexProps> = ({}) => {
  const [date, setDate] = useState<Datetype>({
    justDate: null,
    dateTime: null,
  });

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <ReactCalendar
        minDate={new Date()}
        className="REACT-CALENDAR, p-2"
        view="month"
        onClickDay={(date) => console.log(date)}
      />
    </div>
  );
};

export default index;
