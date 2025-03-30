import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const COLUMNS = [
  "Violation_ID",
  "Violation_Type",
  "Fine_Amount",
  "Location",
  "Date",
  "Time",
  "Vehicle_Type",
  "Vehicle_Color",
  "Vehicle_Model_Year",
  "Registration_State",
  "Driver_Age",
  "Driver_Gender",
  "License_Type",
  "Penalty_Points",
  "Weather_Condition",
  "Road_Condition",
  "Officer_ID",
  "Issuing_Agency",
  "License_Validity",
  "Number_of_Passengers",
  "Helmet_Worn",
  "Seatbelt_Worn",
  "Traffic_Light_Status",
  "Speed_Limit",
  "Recorded_Speed",
  "Alcohol_Level",
  "Breathalyzer_Result",
  "Towed",
  "Fine_Paid",
  "Payment_Method",
  "Court_Appearance_Required",
  "Previous_Violations",
  "Comments",
];

export function Tabledata({ data }) {
  return (
    <Table className="text-center">
      <TableCaption className="text-sm text-green-600 font-bold ml-8">
        Live data from database.
      </TableCaption>
      <TableHeader>
        <TableRow className="text-center ">
          {
            COLUMNS.map((column) => (
              <TableHead key={column}>{column}</TableHead>
            ))
          }
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((db) => (
          <TableRow key={db.Violation_ID}>
            <TableCell className="font-medium text-wrap w-12">
              {db.Violation_ID}
            </TableCell>
            {
              COLUMNS.filter((column) => column !== "Violation_ID").map((column) => (
                <TableCell key={column}>{db[column]}</TableCell>
              ))
            }
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
