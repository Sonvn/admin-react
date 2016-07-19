import * as React from "react";

const iconStyle = {
    textAlign: "center",
    cursor: "pointer"
};

export class FeatureList extends React.Component<any, any>{
    render(){


        var mockFeatureList = [
            {
                title: "Improve Your CX with Live Analytics",
                slug: "improve-your-cx-with-live-analytics-fbf440c07d94",
                orderNumber: 0
            },
            {
                title: "Should You Try Your Hand at Startup Investing?",
                slug: "should-you-try-your-hand-at-startup-investing-8a4c8a6b864f",
                orderNumber: 1
            },
            {
                title: "Four Common Types of Software Prototypes",
                slug: "four-common-types-of-software-prototypes-8fa275c0602f",
                orderNumber: 2
            },
        ];

        return (
            <section className="content">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="box">
                            <div className="box-header" style={{height: '50px'}}>
                                <h3 style={{margin: 0}}>List Feature Articles</h3>
                                <div className="box-tools">
                                    <button className="btn btn-primary btn-sm" disabled="disabled">Save</button>
                                </div>
                            </div>

                            <div className="box-body table-responsive no-padding">
                                <table className="table table-hover">
                                    <tbody>
                                    <tr>
                                        <th>Title</th>
                                        <th style={{textAlign: 'center', width: '50px'}}>Up</th>
                                        <th style={{textAlign: 'center', width: '50px'}}>Down</th>
                                    </tr>
                                    {
                                        mockFeatureList.map((article) => (
                                            <tr key={article.slug}>
                                                <td>{article.title} (<a href={`http://blog.prototype1.io/article/${article.slug}`} target="_blank">Open Article</a>)</td>
                                                <td style={iconStyle}><i className="fa fa-arrow-up"></i></td>
                                                <td style={iconStyle}><i className="fa fa-arrow-down"></i></td>
                                            </tr>
                                        ))
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}