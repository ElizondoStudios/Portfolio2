import GridCard from './GridCard';
import '../styles/ContentGrid.css'

function ContentGrid() {
    return ( 
        <div className="wrapper">
            <div className="content-grid">
                {
                    ["Acerca de mí", "Educación y experiencia", "Proyectos"].map((title, index) => {
                        return <GridCard key={index} id={`Card${index+1}`} title={title} />
                    })
                }
            </div>
        </div>
     );
}

export default ContentGrid;