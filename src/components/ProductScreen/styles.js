import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  root: {
    // maxWidth: 345, original width style
    maxWidth: '40%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    marginTop:'30'
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