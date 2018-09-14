import React from 'react';

export default class PropsChildren extends React.Component{
        rnderList(){
            return(
                React.Children.map(this.props.children,(child)=>{
                    return <li>{child}</li>
                })
            )
        }
        render(){
            return(
                <div>
                    <br/>
                    {/* 遍历提取this.propd.children的值 */}
                    <ul>
                        {this.renderList()}
                    </ul>
                </div>
            );
        }
}