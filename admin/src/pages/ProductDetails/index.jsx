import { Breadcrumbs, Chip, emphasize, styled } from "@mui/material";
import HomeIcon from '"@mui/icons-material/Home';
import ExpandMoreIcon from '"@mui/icons-material/ExpandMore';


const StyledBreadcrumb = styled(Chip)(({theme}) =>{
    const backgroundColor = 
        theme.palette.mode === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[800];
        return{
            backgroundColor,
            height: theme.spacing(3),
            color: theme.palette.text.primary,
            fontWeight: theme.typography.fontWeightRegular,
            '&:hover, &:focus': {
                backgroundColor: emphasize(backgroundColor, 0.06),
            },
            '&:active':{
                boxShadow: theme.shadows[1],
                backgroundColor: emphasize(backgroundColor, 0.12),
            },
        };
});

const ProductDetails = () =>{
    return (
        <>
        <div className="right-content w-100">
            <div className="card shadow border-0 w-100 flex-row p-4">
                <h5 className="mb-0">Product List</h5>
                <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
                    <StyledBreadcrumb
                        component="a"
                        href="#"
                        label="Dashboard"
                        icon={<HomeIcon fontSize="small"/>}
                    />
                    <StyledBreadcrumb
                        label="Products"
                        deleteIcon={<ExpandMoreIcon />}
                    />
                </Breadcrumbs>
            </div>
        </div>
        </>
    );
}

export default ProductDetails;