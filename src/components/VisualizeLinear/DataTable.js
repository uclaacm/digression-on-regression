import React from 'react';
import './DataTable.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Student 1', 40, 0),
    createData('Student 2', 40, 2),
    createData('Student 3', 40, 3),
    createData('Student 4', 48, 3),
    createData('Student 5', 44, 3),
    createData('Student 6', 54, 4),
    createData('Student 7', 64, 4),
    createData('Student 8', 88, 4),
    createData('Student 9', 56, 4),
    createData('Student 10', 64, 5),
    createData('Student 11', 75, 5),
    createData('Student 12', 68, 6),
    createData('Student 13', 77, 6),
    createData('Student 14', 74, 6),
    createData('Student 15', 80, 6),
    createData('Student 16', 85, 7),
    createData('Student 17', 83, 7),
    createData('Student 18', 84, 7),
    createData('Student 19', 89, 7),
    createData('Student 20', 90, 7),
    createData('Student 21', 94, 7),
    createData('Student 22', 50, 8),
    createData('Student 23', 90, 8),
    createData('Student 24', 95, 8),
    createData('Student 25', 98, 8),
    createData('Student 26', 70, 8),
    createData('Student 27', 89, 8),
    createData('Student 28', 100, 8),
    createData('Student 29', 92, 9),
    createData('Student 30', 94, 9),
    createData('Student 31', 87, 9),
    createData('Student 32', 95, 9),
    createData('Student 33', 100, 9),
    createData('Student 34', 96, 9),
    createData('Student 35', 98, 10.0),
    createData('Student 36', 100, 10.0),
    createData('Student 37', 92, 10.0),
    createData('Student 38', 88, 10.0),
    createData('Student 39', 98, 11),
    createData('Student 40', 100, 12),
  ];
  
const DataTable = () => {

    return (
      <div  className = "DataTable">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Student</TableCell>
                <TableCell align="right">Grade (%)</TableCell>
                <TableCell align="right">Hours Slept</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className = "rows">
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }

export default DataTable;