import SectionOne from './SectionOne'

function Form(props) {
    return (
        <div style={{ padding: 20, border: '1px solid #ccc' }}>
            <SectionOne
                sectionOneCount={props.listLength}
                sectionOneAdd={props.addToList}
            />
        </div>
    )
}

export default Form
