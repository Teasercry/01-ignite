export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository?.name ?? 'Not Found'}</strong>
            <p>{props.repository?.description ?? 'Not Found'}</p>
            <a href={props.repository?.html_url ?? 'Not Found'} target="_blank">Acessar Repositório</a>
        </li>
    );
}