import {Router,Route,IndexRoute} from 'react-router-dom';



<Route path="Builld-deliver" components={App}>
        <IndexRoute components={Build_Content} />
        <Route path="Job" components={ExecCution}>
            <IndexRoute components={Exec_Content}/>
            <Route path="action" components={Sftp}>
                <IndexRoute components={Sftp_Content}/>
            </Route>
            <Route path="add" components={Add}>
                <IndexRoute components={add}/>
            </Route>
        </Route>
</Route>