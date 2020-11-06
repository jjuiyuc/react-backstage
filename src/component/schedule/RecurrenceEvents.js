// import React from "react";
// import {
//     ScheduleComponent,
//     ViewsDirective,
//     ViewDirective,
//     Day,
//     Week,
//     Month,
//     Inject,
//     Resize,
//     DragAndDrop,
// } from "@syncfusion/ej2-react-schedule";
// import { applyCategoryColor } from "@util";
// import { extend } from "@syncfusion/ej2-base";
// import * as dataSource from "@constant";
// import { CheckBoxComponent } from "@syncfusion/ej2-react-buttons";
// import { PropertyPane, SampleBase } from "@component";

// export default class RecurrenceEvents extends SampleBase {
//     constructor() {
//         super(...arguments);
//         this.data = extend([], dataSource.recurrenceData, null, true);
//     }
//     onEventRendered(args) {
//         applyCategoryColor(args, this.scheduleObj.currentView);
//     }
//     onChange(args) {
//         this.scheduleObj.eventSettings.editFollowingEvents = args.checked;
//     }
//     render() {
//         return (
//             <div className="schedule-control-section">
//                 <div className="col-lg-9 control-section">
//                     <div className="control-wrapper">
//                         <ScheduleComponent
//                             width="100%"
//                             height="650px"
//                             selectedDate={new Date(2018, 1, 20)}
//                             ref={(t) => (this.scheduleObj = t)}
//                             eventSettings={{ dataSource: this.data }}
//                             eventRendered={this.onEventRendered.bind(this)}
//                         >
//                             <ViewsDirective>
//                                 <ViewDirective option="Day" />
//                                 <ViewDirective option="Week" />
//                                 <ViewDirective option="Month" />
//                             </ViewsDirective>
//                             <Inject
//                                 services={[
//                                     Day,
//                                     Week,
//                                     Month,
//                                     Resize,
//                                     DragAndDrop,
//                                 ]}
//                             />
//                         </ScheduleComponent>
//                     </div>
//                 </div>
//                 <div className="col-lg-3 property-section">
//                     <PropertyPane title="Properties">
//                         <table
//                             id="property"
//                             title="Properties"
//                             style={{ width: "100%" }}
//                         >
//                             <tbody>
//                                 <tr style={{ height: "50px" }}>
//                                     <td style={{ width: "100%" }}>
//                                         <CheckBoxComponent
//                                             id="editFollowingEvents"
//                                             checked={false}
//                                             label="Enable Following Events"
//                                             change={this.onChange.bind(this)}
//                                         ></CheckBoxComponent>
//                                     </td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </PropertyPane>
//                 </div>
//             </div>
//         );
//     }
// }
// // export default RecurrenceEvents;
