# Grid System

# Grid
| Property | Description |Type | Default|
|--|--|--|--|
|cols|The total number of columns in grid system|number|12
|autoColWidth|Grid item width (px) for rendering list of grid item, when Property "cols" is not set|number|0
|windowHeight|Set the grid height to window viewport height|bool|false

**Remarks:**
 - Property "cols" is for setting the layout
 - Property "autoColWidth" is for rendering a list of items

## Col
| Property | Description |Type | Default|
|--|--|--|--|
|gb|The global span value for all screen size ( if no specific screen size column value is set, gb will be applied|number|12
|xs|The span value is set to screen size <=480px |number|gb (12)
|sm|The span value is set to screen size <=767px |number|gb (12)
|md|The span value is set to screen size <=1024px |number|gb (12)
|lg|The span value is set to screen size <=1280px |number|gb (12)
|xl|The span value is set to screen size >1280px |number|gb (12)
|center|Center the grid item if **there is only one column in a row** |bool|false
|flexRow|Set the col div as flex row container instead of flex column(default) |bool|false
|justify|**If Property "flexRow" is set**, set the justify-content as "start"/"center"/"end"/"space-around"/|string|start