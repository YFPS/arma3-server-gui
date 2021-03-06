import React from "react";
import {humanFileSize} from "../util/util";

const getWorkshopUrl = modId => "https://steamcommunity.com/sharedfiles/filedetails/?id=" + modId;

const getInstalledIcon = ({installed, failed, lastUpdated}) => {
    const getLastUpdate = (date) => "Last updated: " + date;

    if (failed) return (
        <i title={getLastUpdate(lastUpdated)} className="fa fa-exclamation-triangle" aria-hidden="true"></i>
    );

    if (installed) return (
        <i title={getLastUpdate(lastUpdated)} className="fa fa-check" aria-hidden="true"></i>
    );

    else return (
        <div title={getLastUpdate(lastUpdated)} className="spinner-border spinner-border-sm" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    );
};

const ModsTable = ({mods, onUpdateClicked, onUninstallClicked, onActiveChange, onApplyClicked}) => {
    return (
        <React.Fragment>
            {mods.some(m => m.failed) &&
            <div className="alert alert-danger" role="alert">
                <p className="m-0 p-1">
                    Installation of some mods failed. Check whether the given Steam authentication is correct and the
                    Steam
                    Guard token is valid. Updating the mod might also help with some issues. If the issue persists,
                    contact the server admin
                </p>
            </div>
            }
            <div className="mods-table__wrapper">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">File size</th>
                        <th scope="col" className="text-center">Installed</th>
                        <th scope="col"/>
                        <th scope="col"/>
                        <th scope="col" className="text-center">Active</th>
                    </tr>
                    </thead>
                    <tbody>
                    {mods.map(mod => (
                            <tr key={mod.id} className={mod.failed ? "table-danger" : ""}>
                                <td>
                                    <a href={getWorkshopUrl(mod.id)}
                                       target="_blank"
                                       rel="noopener noreferrer"
                                    >
                                        {mod.id}
                                    </a>
                                </td>
                                <td>{mod.name}</td>
                                <td>{mod.fileSize && humanFileSize(mod.fileSize)}</td>
                                <td className="text-center">{getInstalledIcon(mod)}</td>
                                <td>
                                    <button className="btn btn-sm btn-primary"
                                            onClick={() => onUpdateClicked(mod.id)}
                                    >
                                        Update
                                    </button>
                                </td>
                                <td>
                                    <button className="btn btn-sm btn-danger"
                                            onClick={() => onUninstallClicked(mod.id)}
                                    >
                                        Uninstall
                                    </button>
                                </td>
                                <td className="text-center">
                                    <input type="checkbox"
                                           value={mod.id}
                                           checked={mod.active}
                                           disabled={!mod.active && mod.failed}
                                           onChange={onActiveChange}/>
                                </td>
                            </tr>
                        )
                    )}
                    </tbody>
                </table>
            </div>

            <button className="float-right btn btn-primary"
                    onClick={onApplyClicked}>
                Apply
            </button>
        </React.Fragment>
    );
};

export default ModsTable;