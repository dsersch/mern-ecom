import classes from './DropdownMenu.module.css'


const DropdownMenu = (props) => {
    return (
        <div className={classes['dropdown-menu']}>
            {props.children}
        </div>
    )
}

export default DropdownMenu