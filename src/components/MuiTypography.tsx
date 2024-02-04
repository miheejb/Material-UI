import {Typography} from '@mui/material';


export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1"> h1 heading</Typography>
      <Typography variant="h2"> h2 heading</Typography>
      <Typography variant="h3"> h3 heading</Typography>
      <Typography variant="h4" componentent='h1' gutterBottom> h4 heading</Typography>
      <Typography variant="h5"> h5 heading</Typography>
      <Typography variant="h6"> h6 heading</Typography>

      <Typography variant="subtitle1"> subtitle 1</Typography>
      <Typography variant="subtitle2"> subtitle 2</Typography>

      <Typography variant="body1"> body 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate at iusto laborum fugit ea, sit excepturi id tempore dolor ab atque? Illo quae commodi quisquam? Qui quod itaque repudiandae adipisci?</Typography>
      <Typography variant="body2"> body 2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis unde officia nam ipsum minima iusto ab repellendus, saepe rerum illum expedita odit? Vitae doloribus consequuntur voluptate harum eaque molestiae nisi?</Typography>

      {/* body1 and body2 is with tag as pragraph element */}
    </div>
  );
}
