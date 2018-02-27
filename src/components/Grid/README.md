# Grid System
	<Grid>
	    <Grid.Row>
		    <Grid.Col center xs={12} sm={8} md={4} lg={4} xl={2}>
		       <h1>Col Element</h1>
	        </Grid.Col>
	        <Grid.Col justify={'flex-end'} center xs={8} sm={8} md={6} lg={4} xl={4}gb={12} >
	        <h2>Col Element</h2>
	        </Grid.Col>
		</Grid.Row>
		<Grid.Row>
			<Grid.Col>
				<h1>Col Element</h1>
			</Grid.Col>
		</Grid.Row>
	<Grid>

# Grid
| Property | Description |Type | Default|
|--|--|--|--|
|viewHeight|Set the grid height to viewport height|bool|false
|justify|set the justify-content as "flex-start"/"center"/"flex-end"/"space-around"/"space-between"|string|flex-start

**Remarks:**
 - It is a column based flex container

## Row
| Property | Description |Type | Default|
|--|--|--|--|
|cols|The total number of columns in a row |number|12
|autoColWidth|Grid item width (px) for rendering list of grid item, **if Property "cols" is not set**|number|0
|justify|set the justify-content as "flex-start"/"center"/"flex-end"/"space-around"/"space-between"|string|flex-start

**Remarks:**
 - It is a flex container
 - Gutter: 
	 - xs, sm: 10px
	 - md: 30px
	 - lg,xl: 30px
 - Property "cols" is for setting the layout
 - Property "autoColWidth" is for rendering a list of items
## Col
| Property | Description |Type | Default|
|--|--|--|--|
|gb|The global span value for all screen size ( if no specific screen size column value is set, gb will be applied|number|12
|xs|The span value is set to screen size <=576px |number|gb (12)
|sm|The span value is set to screen size <=767px |number|gb (12)
|md|The span value is set to screen size <=991px |number|gb (12)
|lg|The span value is set to screen size <=1199px |number|gb (12)
|xl|The span value is set to screen size >1200px |number|gb (12)
|center|Center the grid item if **there is only one column in a row** |bool|false
|flexRow|Set the col div as flex row container instead of flex column(default) |bool|false
|justify|**If Property "flexRow" is set**, set the justify-content as "start"/"center"/"end"/"space-around"/|string|start

**Remarks:**
 - lg,md and sm is preferred to be set 
 - xl is inherited by lg, if xl is not set.
 - xs is inherited by sm, if xs is not set.
