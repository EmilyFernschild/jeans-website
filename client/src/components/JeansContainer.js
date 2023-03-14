import JeansPost from "./JeansPost"

function JeansContainer({jeans}){
    return(
        <div>
            {console.log(jeans)}
            Jeans Container
            {jeans?.map(jean => <JeansPost key={jean.id} jean={jean} />)}
        </div>
    )
}
export default JeansContainer;