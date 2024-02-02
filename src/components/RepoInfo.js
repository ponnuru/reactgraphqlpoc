const RepoInfo = ({ repo }) => {
    let license;
    switch (repo.licenseInfo?.spdxId) {
        case undefined:
            license = (
                <span className="px-1 py-0 ms-1 d-link-block btn btn-sm btn-danger" style={{ font: ".6em" }}>NO LICENSE</span>
            );
            break;
        case "MIT":
            license = (
                <span className="px-1 py-0 ms-1 d-link-block btn btn-sm btn-warning" style={{ font: ".6em" }}>{repo.licenseInfo?.spdxId}</span>
            );
            break;
        default:
            license = (
                <span className="px-1 py-0 ms-1 d-link-block btn btn-sm btn-success" style={{ font: ".6em" }}>{repo.licenseInfo?.spdxId}</span>
            );
    }
    return (
        <li className="list-group-item" key={repo.id.toString()}>
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-column">
                    <a className="h5 mb-0 text-decoration-none" href={repo.url}>{repo.name}</a>
                    <p className="small">{repo.description}</p>
                </div>
                <div className="text-no-wrap ms-3">
                    {license}
                </div>
            </div>

        </li>
    );
};
export default RepoInfo;