import { ItemRepoContainer } from "./styles"


export const ItemRepo = ({repo, itemRemove}) => {



    return (
        <ItemRepoContainer id={repo.id}>
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <a href={repo.html_url} target='_blank'>Ver repo</a><br/>
            <a href="#" className='remove' onClick={() => itemRemove(repo.id)}>Remover</a>
            <hr />
        </ItemRepoContainer>
    )
}