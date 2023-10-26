# Lesson 5

## Types of import/export
- There are 2 types of import/export
    - Default import/export
    - Named import/export

### Default import/export
- Used when there is only a single item in the file that needed to exported
- example
```
export default item
```
```
import item from 'file'
```
### Named import/export
- Used when multiple items are required to be exported from a file.
- example
```
export const item1 = []
export const item2 = {}
export const item3 = ''
```
```
import {item1, item2, item3} from 'file'
```