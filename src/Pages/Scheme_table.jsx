import React from "react";

const Scheme_table = () => {
  return (
    <>
      <div className="my-6 flex flex-col justify-center">
        <div className="text-3xl mb-14 text-center">
          <h2>Scheme IT</h2>
        </div>
        {/* Table 1 */}
        <div className="overflow-x-auto">
          <table
            className="table-auto mx-4 border-spacing-0 border-collapse text-center
          lg:mx-auto
          xl:mx-auto
         2xl:mx-auto
          "
          >
            <tr>
              <th
                colSpan={14}
                className=" text-white text-xl w-128 leading-8 border-t-0 border-b-2 px-8 rounded-t-3xl bg-tableblue outline-0 border-tableblue"
              >
                Kadi Sarva Vishwavidyalaya | Scheme for Teaching and Examination
                Master of Engineering (Computer Engineering) With Effect From:
                Academic Year 2017 – 18 (CBCS)
              </th>
            </tr>
            <tr className="border-[1px]">
              <th
                rowSpan={2}
                colSpan={2}
                className="whitespace-nowrap border-[1px]"
              >
                &nbsp;
              </th>
              <th colSpan={4} className="whitespace-nowrap border-[1px]">
                Teaching Scheme
              </th>
              <th rowSpan={3} className="whitespace-nowrap border-[1px]">
                &nbsp;
              </th>
              <th colSpan={6} className="whitespace-nowrap border-[1px]">
                Evolution Scheme
              </th>
            </tr>
            <tr className="border-[1px]">
              <th className="whitespace-nowrap border-[1px]">L</th>
              <th className="whitespace-nowrap border-[1px]">T</th>
              <th className="whitespace-nowrap border-[1px]">P</th>
              <th className="whitespace-nowrap border-[1px]">Total</th>
              <th className="whitespace-nowrap border-[1px]" colSpan={2}>
                Theory
              </th>
              <th className="whitespace-nowrap border-[1px]">IE</th>
              <th className="whitespace-nowrap border-[1px]">CIA</th>
              <th className="whitespace-nowrap border-[1px]">Pract.</th>
              <th className="whitespace-nowrap border-[1px]">Total</th>
            </tr>
            <tr className="border-[1px]">
              <th className="whitespace-nowrap border-[1px]">Sub Code</th>
              <th className="whitespace-nowrap border-[1px]">Subject Name</th>
              <th className="whitespace-nowrap border-[1px]">Hrs</th>
              <th className="whitespace-nowrap border-[1px]">Hrs</th>
              <th className="whitespace-nowrap border-[1px]">Hrs</th>
              <th className="whitespace-nowrap border-[1px]">Hrs</th>
              <th className="whitespace-nowrap border-[1px]">Hrs</th>
              <th className="whitespace-nowrap border-[1px]">Marks</th>
              <th className="whitespace-nowrap border-[1px]">Marks</th>
              <th className="whitespace-nowrap border-[1px]">Marks</th>
              <th className="whitespace-nowrap border-[1px]">Marks</th>
              <th className="whitespace-nowrap border-[1px]">Marks</th>
            </tr>
            {/* Sem 1 */}
            <tr className="border-[1px]">
              <th colSpan={14} className="bg-tableblue text-white border-[1px]">
                Semester 1
              </th>
            </tr>
            {/* Engineering Maths - I */}
            <tr className="border-[1px]">
              <td className="whitespace-nowrap border-[1px]">CC101-N</td>
              <td className="whitespace-nowrap text-left border-[1px]">
                Engineering Maths - I
              </td>
              <td className="whitespace-nowrap border-[1px]">4</td>
              <td className="whitespace-nowrap border-[1px]">1</td>
              <td className="whitespace-nowrap border-[1px]">0</td>
              <td className="whitespace-nowrap border-[1px]">5</td>
              <td className="whitespace-nowrap border-[1px]">5</td>
              <td className="whitespace-nowrap border-[1px]">3</td>
              <td className="whitespace-nowrap border-[1px]">70</td>
              <td className="whitespace-nowrap border-[1px]">30</td>
              <td className="whitespace-nowrap border-[1px]">50</td>
              <td className="whitespace-nowrap border-[1px]">0</td>
              <td className="whitespace-nowrap border-[1px]">150</td>
            </tr>
            {/* End */}
            {/* Engineering Physics */}
            <tr className="border-[1px]">
              <td className="whitespace-nowrap border-[1px]">CC107-N</td>
              <td className="whitespace-nowrap text-left border-[1px]">
                Engineering Physics
              </td>
              <td className="whitespace-nowrap border-[1px]">4</td>
              <td className="whitespace-nowrap border-[1px]">1</td>
              <td className="whitespace-nowrap border-[1px]">0</td>
              <td className="whitespace-nowrap border-[1px]">5</td>
              <td className="whitespace-nowrap border-[1px]">5</td>
              <td className="whitespace-nowrap border-[1px]">3</td>
              <td className="whitespace-nowrap border-[1px]">70</td>
              <td className="whitespace-nowrap border-[1px]">30</td>
              <td className="whitespace-nowrap border-[1px]">50</td>
              <td className="whitespace-nowrap border-[1px]">0</td>
              <td className="whitespace-nowrap border-[1px]">150</td>
            </tr>
            {/* End */}
            {/* Fundamentals of Programming */}
            <tr className="border-[1px]">
              <td>CC103-N</td>
              <td className="whitespace-nowrap text-left border-[1px]">
                Fundamentals of Programming
              </td>
              <td className="whitespace-nowrap border-[1px]">4</td>
              <td className="whitespace-nowrap border-[1px]">1</td>
              <td className="whitespace-nowrap border-[1px]">0</td>
              <td className="whitespace-nowrap border-[1px]">5</td>
              <td className="whitespace-nowrap border-[1px]">5</td>
              <td className="whitespace-nowrap border-[1px]">3</td>
              <td className="whitespace-nowrap border-[1px]">70</td>
              <td className="whitespace-nowrap border-[1px]">30</td>
              <td className="whitespace-nowrap border-[1px]">50</td>
              <td className="whitespace-nowrap border-[1px]">0</td>
              <td className="whitespace-nowrap border-[1px]">150</td>
            </tr>
            {/* End */}
            {/* Elements of Civil Engineering */}
            <tr className="border-[1px]">
              <td className="whitespace-nowrap border-[1px]">CC109-N</td>
              <td className="whitespace-nowrap text-left border-[1px]">
                Elements of Civil Engineering
              </td>
              <td className="whitespace-nowrap border-[1px]">4</td>
              <td className="whitespace-nowrap border-[1px]">1</td>
              <td className="whitespace-nowrap border-[1px]">0</td>
              <td className="whitespace-nowrap border-[1px]">5</td>
              <td className="whitespace-nowrap border-[1px]">5</td>
              <td className="whitespace-nowrap border-[1px]">3</td>
              <td className="whitespace-nowrap border-[1px]">70</td>
              <td className="whitespace-nowrap border-[1px]">30</td>
              <td className="whitespace-nowrap border-[1px]">50</td>
              <td className="whitespace-nowrap border-[1px]">0</td>
              <td className="whitespace-nowrap border-[1px]">150</td>
            </tr>
            {/* End */}
            {/* Engineering Graphics */}
            <tr className="border-[1px]">
              <td className="whitespace-nowrap border-[1px]">CC110-N</td>
              <td className="whitespace-nowrap text-left border-[1px]">
                Engineering Graphics
              </td>
              <td className="whitespace-nowrap border-[1px]">4</td>
              <td className="whitespace-nowrap border-[1px]">1</td>
              <td className="whitespace-nowrap border-[1px]">0</td>
              <td className="whitespace-nowrap border-[1px]">5</td>
              <td className="whitespace-nowrap border-[1px]">5</td>
              <td className="whitespace-nowrap border-[1px]">3</td>
              <td className="whitespace-nowrap border-[1px]">70</td>
              <td className="whitespace-nowrap border-[1px]">30</td>
              <td className="whitespace-nowrap border-[1px]">50</td>
              <td className="whitespace-nowrap border-[1px]">0</td>
              <td className="whitespace-nowrap border-[1px]">150</td>
            </tr>
            {/* End */}
            {/* University Elective - I (ES) */}
            <tr className="border-[1px]">
              <td className="whitespace-nowrap border-[1px]">&nbsp;</td>
              <td className="whitespace-nowrap text-left border-[1px]">
                University Elective - I (ES)
              </td>
              <td className="whitespace-nowrap border-[1px]">4</td>
              <td className="whitespace-nowrap border-[1px]">1</td>
              <td className="whitespace-nowrap border-[1px]">0</td>
              <td className="whitespace-nowrap border-[1px]">5</td>
              <td className="whitespace-nowrap border-[1px]">5</td>
              <td className="whitespace-nowrap border-[1px]">3</td>
              <td className="whitespace-nowrap border-[1px]">70</td>
              <td className="whitespace-nowrap border-[1px]">30</td>
              <td className="whitespace-nowrap border-[1px]">50</td>
              <td className="whitespace-nowrap border-[1px]">0</td>
              <td className="whitespace-nowrap border-[1px]">150</td>
            </tr>
            {/* End */}
            <tr className="bg-blue-200 text-black border-[1px]">
              <td className="whitespace-nowrap border-[1px]">&nbsp;</td>
              <td className="whitespace-nowrap text-left border-[1px]">
                Total
              </td>
              <td className="whitespace-nowrap border-[1px]">18</td>
              <td className="whitespace-nowrap border-[1px]">1</td>
              <td className="whitespace-nowrap border-[1px]">12</td>
              <td className="whitespace-nowrap border-[1px]">31</td>
              <td className="whitespace-nowrap border-[1px]">25</td>
              <td className="whitespace-nowrap border-[1px]">18</td>
              <td className="whitespace-nowrap border-[1px]">420</td>
              <td className="whitespace-nowrap border-[1px]">180</td>
              <td className="whitespace-nowrap border-[1px]">150</td>
              <td className="whitespace-nowrap border-[1px]">120</td>
              <td className="whitespace-nowrap border-[1px]">870</td>
            </tr>
            {/* End */}
            {/* Sem 2 */}
            <tr className="border-[1px]">
              <th colSpan={14} className="bg-tableblue text-white border-[1px]">
                Semester 2
              </th>
            </tr>
            {/* Engineering Maths - II */}
            <tr className="border-[1px]">
              <td className="whitespace-nowrap border-[1px]">CC201-N</td>
              <td className="whitespace-nowrap text-left border-[1px]">
                Engineering Maths - II
              </td>
              <td className="whitespace-nowrap border-[1px]">4</td>
              <td className="whitespace-nowrap border-[1px]">1</td>
              <td className="whitespace-nowrap border-[1px]">0</td>
              <td className="whitespace-nowrap border-[1px]">5</td>
              <td className="whitespace-nowrap border-[1px]">5</td>
              <td className="whitespace-nowrap border-[1px]">3</td>
              <td className="whitespace-nowrap border-[1px]">70</td>
              <td className="whitespace-nowrap border-[1px]">30</td>
              <td className="whitespace-nowrap border-[1px]">50</td>
              <td className="whitespace-nowrap border-[1px]">0</td>
              <td className="whitespace-nowrap border-[1px]">150</td>
            </tr>
            {/* End */}
            {/* Basic Electrical & Electronics Engineering */}
            <tr className="border-[1px]">
              <td className="whitespace-nowrap border-[1px]">CC102-N</td>
              <td className="whitespace-nowrap text-left border-[1px]">
                Basic Electrical & Electronics Engineering
              </td>
              <td className="whitespace-nowrap border-[1px]">4</td>
              <td className="whitespace-nowrap border-[1px]">1</td>
              <td className="whitespace-nowrap border-[1px]">0</td>
              <td className="whitespace-nowrap border-[1px]">5</td>
              <td className="whitespace-nowrap border-[1px]">5</td>
              <td className="whitespace-nowrap border-[1px]">3</td>
              <td className="whitespace-nowrap border-[1px]">70</td>
              <td className="whitespace-nowrap border-[1px]">30</td>
              <td className="whitespace-nowrap border-[1px]">50</td>
              <td className="whitespace-nowrap border-[1px]">0</td>
              <td className="whitespace-nowrap border-[1px]">150</td>
            </tr>
            {/* End */}
            {/* Object Oriented Programming using "C++" */}
            <tr className="border-[1px]">
              <td className="whitespace-nowrap border-[1px]">CC111-N</td>
              <td className="whitespace-nowrap text-left border-[1px]">
                Object Oriented Programming using "C++"
              </td>
              <td className="whitespace-nowrap border-[1px]">4</td>
              <td className="whitespace-nowrap border-[1px]">1</td>
              <td className="whitespace-nowrap border-[1px]">0</td>
              <td className="whitespace-nowrap border-[1px]">5</td>
              <td className="whitespace-nowrap border-[1px]">5</td>
              <td className="whitespace-nowrap border-[1px]">3</td>
              <td className="whitespace-nowrap border-[1px]">70</td>
              <td className="whitespace-nowrap border-[1px]">30</td>
              <td className="whitespace-nowrap border-[1px]">50</td>
              <td className="whitespace-nowrap border-[1px]">0</td>
              <td className="whitespace-nowrap border-[1px]">150</td>
            </tr>
            {/* End */}
            {/* Fundamentals of Mechanical Engineering */}
            <tr className="border-[1px]">
              <td className="whitespace-nowrap border-[1px]">CC104-N</td>
              <td className="whitespace-nowrap text-left border-[1px]">
                Fundamentals of Mechanical Engineering
              </td>
              <td className="whitespace-nowrap border-[1px]">4</td>
              <td className="whitespace-nowrap border-[1px]">1</td>
              <td className="whitespace-nowrap border-[1px]">0</td>
              <td className="whitespace-nowrap border-[1px]">5</td>
              <td className="whitespace-nowrap border-[1px]">5</td>
              <td className="whitespace-nowrap border-[1px]">3</td>
              <td className="whitespace-nowrap border-[1px]">70</td>
              <td className="whitespace-nowrap border-[1px]">30</td>
              <td className="whitespace-nowrap border-[1px]">50</td>
              <td className="whitespace-nowrap border-[1px]">0</td>
              <td className="whitespace-nowrap border-[1px]">150</td>
            </tr>
            {/* End */}
            {/* Workshop */}
            <tr className="border-[1px]">
              <td className="whitespace-nowrap border-[1px]">CC105-N</td>
              <td className="whitespace-nowrap text-left border-[1px]">
                Workshop
              </td>
              <td className="whitespace-nowrap border-[1px]">4</td>
              <td className="whitespace-nowrap border-[1px]">1</td>
              <td className="whitespace-nowrap border-[1px]">0</td>
              <td className="whitespace-nowrap border-[1px]">5</td>
              <td className="whitespace-nowrap border-[1px]">5</td>
              <td className="whitespace-nowrap border-[1px]">3</td>
              <td className="whitespace-nowrap border-[1px]">70</td>
              <td className="whitespace-nowrap border-[1px]">30</td>
              <td className="whitespace-nowrap border-[1px]">50</td>
              <td className="whitespace-nowrap border-[1px]">0</td>
              <td className="whitespace-nowrap border-[1px]">150</td>
            </tr>
            {/* End */}
            {/* Business Communication and Presentation Skills */}
            <tr className="border-[1px]">
              <td className="whitespace-nowrap border-[1px]">CC165-N</td>
              <td className="whitespace-nowrap text-left border-[1px]">
                Business Communication and Presentation Skills
              </td>
              <td className="whitespace-nowrap border-[1px]">4</td>
              <td className="whitespace-nowrap border-[1px]">1</td>
              <td className="whitespace-nowrap border-[1px]">0</td>
              <td className="whitespace-nowrap border-[1px]">5</td>
              <td className="whitespace-nowrap border-[1px]">5</td>
              <td className="whitespace-nowrap border-[1px]">3</td>
              <td className="whitespace-nowrap border-[1px]">70</td>
              <td className="whitespace-nowrap border-[1px]">30</td>
              <td className="whitespace-nowrap border-[1px]">50</td>
              <td className="whitespace-nowrap border-[1px]">0</td>
              <td className="whitespace-nowrap border-[1px]">150</td>
            </tr>
            {/* End */}
            {/* University Elective - II (ES) */}
            <tr className="border-[1px]">
              <td className="whitespace-nowrap border-[1px]">&nbsp;</td>
              <td className="whitespace-nowrap text-left border-[1px]">
                University Elective - II (ES)
              </td>
              <td className="whitespace-nowrap border-[1px]">4</td>
              <td className="whitespace-nowrap border-[1px]">1</td>
              <td className="whitespace-nowrap border-[1px]">0</td>
              <td className="whitespace-nowrap border-[1px]">5</td>
              <td className="whitespace-nowrap border-[1px]">5</td>
              <td className="whitespace-nowrap border-[1px]">3</td>
              <td className="whitespace-nowrap border-[1px]">70</td>
              <td className="whitespace-nowrap border-[1px]">30</td>
              <td className="whitespace-nowrap border-[1px]">50</td>
              <td className="whitespace-nowrap border-[1px]">0</td>
              <td className="whitespace-nowrap border-[1px]">150</td>
            </tr>
            {/* End */}
            <tr className="bg-blue-200 text-black border-[1px]">
              <td className="whitespace-nowrap border-[1px]">&nbsp;</td>
              <td className="whitespace-nowrap text-left border-[1px]">
                Total
              </td>
              <td className="whitespace-nowrap border-[1px]">19</td>
              <td className="whitespace-nowrap border-[1px]">1</td>
              <td className="whitespace-nowrap border-[1px]">10</td>
              <td className="whitespace-nowrap border-[1px]">30</td>
              <td className="whitespace-nowrap border-[1px]">25</td>
              <td className="whitespace-nowrap border-[1px]">18</td>
              <td className="whitespace-nowrap border-[1px]">420</td>
              <td className="whitespace-nowrap border-[1px]">180</td>
              <td className="whitespace-nowrap border-[1px]">190</td>
              <td className="whitespace-nowrap border-[1px]">180</td>
              <td className="whitespace-nowrap border-[1px]">970</td>
            </tr>
            {/* End */}
          </table>
        </div>
        {/* End */}
        {/* Table 2 */}
        <div className="overflow-x-auto my-5">
          <table
            className="table-auto mx-4 border-spacing-0 border-collapse text-center
            lg:mx-0 xl:mx-52 2xl:mx-64"
          >
            <tr className="border-[1px]">
              <th className="border-[1px]">&nbsp;</th>
              <th className="text-left border-[1px]">
                List of University Elective
              </th>
            </tr>
            <tr className="border-[1px]">
              <td className="whitespace-nowrap w-[5.3rem] text-center border-[1px]">
                UE101
              </td>
              <td className="text-left border-[1px] w-[27.2rem]">
                Environmental Science
              </td>
            </tr>
            <tr className="border-[1px]">
              <td className="whitespace-nowrap w-[5.3rem] text-center border-[1px]">
                UE102
              </td>
              <td className="text-left border-[1px]">
                Introduction to Information and Communication Technology
              </td>
            </tr>
            <tr className="border-[1px]">
              <td className="whitespace-nowrap w-[5.3rem] text-center border-[1px]">
                UE103
              </td>
              <td className="text-left border-[1px]">
                Personality Development
              </td>
            </tr>
            <tr className="border-[1px]">
              <td className="whitespace-nowrap w-[5.3rem] text-center border-[1px]">
                UE104
              </td>
              <td className="text-left border-[1px]">
                Entrepreneurship & Incubation
              </td>
            </tr>
          </table>
        </div>
        {/* End */}
      </div>
    </>
  );
};

export default Scheme_table;
