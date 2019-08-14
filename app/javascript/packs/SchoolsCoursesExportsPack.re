[@bs.config {jsx: 3}];

open CourseExports__Types;

let decodeProps = json =>
  Json.Decode.(
    json |> field("course", Course.decode),
    json |> field("exports", array(CourseExport.decode)),
    json |> field("tags", array(Tag.decode)),
  );

let (course, exports, tags) =
  DomUtils.parseJsonAttribute(~id="schools-courses-exports__root", ())
  |> decodeProps;

ReactDOMRe.renderToElementWithId(
  <CourseExports__Root course exports tags />,
  "schools-courses-exports__root",
);