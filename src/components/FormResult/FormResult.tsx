import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useMemo } from "react";
import { useCheckout } from "../../context/CheckoutFormContext";

const FormResult = () => {
  const { state } = useCheckout();

  const entries = useMemo(() => {
    const form = Object.entries(state).filter((ele) => ele[0].includes("Form"));
    const formFields = form.map((ele) => {
      return Object.entries(ele[1]);
    });

    return formFields;
  }, [state]);

  return (
    <>
      <Container>
        <Typography component="h2" variant="h5" textAlign="center" marginY={2}>
          📋 Form Values
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Field</TableCell>
                <TableCell align="right">Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {entries.map((entry) =>
                entry.map((field) => (
                  <TableRow key={field[0]}>
                    <TableCell component="th" scope="row">
                      {field[0]}
                    </TableCell>
                    <TableCell align="right">{field[1].toString()}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default FormResult;
