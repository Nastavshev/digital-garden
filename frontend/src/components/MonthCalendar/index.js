import React, { useEffect } from 'react';
import { getMonthThunk } from '../../redux/action-creater';
import { useDispatch, useSelector } from 'react-redux';
import styles from './monthCalendar.module.css';
import { useParams } from 'react-router-dom';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.success.light,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.error.light,
    color: theme.palette.common.white,
  },
}))(StyledTableCell);


const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);



const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
  //   tableRightBorder: {
  //     borderWidth: 1,
  //     borderRightWidth: 1,
  //     borderColor: 'black',
  //     borderStyle: 'solid',
  // },
});

function MonthCalendar() {
  const classes = useStyles();
  const { idMonth } = useParams();
  console.log(idMonth);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const monthArray = useSelector((state) => state.mooncalendar[0].year.month)
 
  let data = monthArray.find((element) => element._id === idMonth)
  console.log(data.article.text);

  return (
    <div className={styles.wrapperMoon}>
      <h1>Лунный календарь посадки растений</h1>
      <div key={data._id}>
        <div className={styles.monthName}>{data.nameMonth}</div>
        <div className={styles.shortInfo}>
          {data.shortInfo.info}
        </div>
        <div className={styles.imgNature}>
          <div>
            <img src={`/images/${data.imageNature}.jpg`} alt="monthPicture" />
          </div>
          <div>
            <img src={`/images/${data.imageCalendar}`} alt="moonPicture" />
          </div>
        </div>
        <div>
          <h2>Благоприятные и неблагоприятные посадочные дни</h2>
        </div>
      </div>
      <div className={styles.tableGrow}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell style={{ width: '50%' }}>Культура</StyledTableCell>
                <StyledTableCell align="center" style={{ width: '50%' }}>Благоприятные дни для посева семян</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.plantSeed.map((row) => (
                <StyledTableRow key={row._id}>
                  <StyledTableCell component="th" scope="row" style={{ width: '50%' }}>
                    {row.crop}
                  </StyledTableCell>
                  <StyledTableCell align="center" style={{ width: '50%' }}>{row.date}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className={styles.tableGrow}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell style={{ width: '50%' }}>Культура</StyledTableCell>
                <StyledTableCell align="center" style={{ width: '50%' }}>Благоприятные дни для посева и посадки цветов</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.plantSeed.map((row) => (
                <StyledTableRow key={row._id}>
                  <StyledTableCell component="th" scope="row" style={{ width: '50%' }}>
                    {row.crop}
                  </StyledTableCell>
                  <StyledTableCell align="center" style={{ width: '50%' }}>{row.date}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className={styles.tableGrow}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell style={{ width: '50%' }}>Культура</StyledTableCell>
                <StyledTableCell align="center" style={{ width: '50%' }}>Благоприятные дни для посева и посадки цветов</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.plantFlower.map((row) => (
                <StyledTableRow key={row._id}>
                  <StyledTableCell component="th" scope="row" style={{ width: '50%' }}>
                    {row.crop}
                  </StyledTableCell>
                  <StyledTableCell align="center" style={{ width: '50%' }}>{row.date}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className={styles.tableGrow}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell style={{ width: '50%' }}>Культура</StyledTableCell>
                <StyledTableCell align="center" style={{ width: '50%' }}>Благоприятные дни для посадки саженцев</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.plantFlower.map((row) => (
                <StyledTableRow key={row._id}>
                  <StyledTableCell component="th" scope="row" style={{ width: '50%' }}>
                    {row.crop}
                  </StyledTableCell>
                  <StyledTableCell align="center" style={{ width: '50%' }}>{row.date}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className={styles.tableGrow}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledCell>Культура</StyledCell>
                <StyledCell align="center">Неблагоприятные дни для посадки и посева семян</StyledCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row" style={{ width: '50%' }}>
                  {data.adverseDay.title}
                </StyledTableCell>
                <StyledTableCell align="center" style={{ width: '50%' }}>{data.adverseDay.date}</StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div>
        <div className={styles.articleTitle}>
          {data.article.title}
        </div>
        <div className={styles.articleText}>
          {data.article.text.map((element) => <p>{element.paragraph}</p>)}
        </div>
      </div>
    </div>
  )
}


export default MonthCalendar;

