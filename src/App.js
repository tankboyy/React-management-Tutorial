import './App.css';
import React from 'react';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root : {
    width : '100%',
    margintop : theme.spacing.unit * 3,
    overflowX : "auto"
  },
  table : {
    minwidth : 1080
  }
})

const coustomers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '킹석중',
  'birthday': '981112',
  'gender': '남자',
  'job': '대통령'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '김용철',
    'birthday': '980119',
    'gender': '개',
    'job': '애완용'
  },
  {
      'id': 3,
      'image': 'https://placeimg.com/64/64/3',
      'name': '이호영',
      'birthday': '980224',
      'gender': '남자',
      'job': '비서'
  }
]

class App extends React.Component {
  render() {
  const { classes } = this.props;
  return (
    <Paper className = {classes.root}>
      <Table className = {classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody> {coustomers.map(c => { return( <Customer key={c.id} id={c.id}image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/> )})}
        </TableBody>
      </Table>
      </Paper>
  )
}
}


export default withStyles(styles)(App);
