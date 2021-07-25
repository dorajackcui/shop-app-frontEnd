import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
    transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    '&:hover':{filter: "grayscale(90%)"},
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}))