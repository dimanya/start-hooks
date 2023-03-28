import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";
const ChildrenExercise = () => {
    const Component = ({ children }) => {
        let num = 1;
        return React.Children.map(children, (child) => {
            const config = { ...child.props, children: child.props.children + " " + num };
            num++;
            return React.cloneElement(child, config);
        });
    };
    Component.propTypes = {
        children: PropTypes.oneOfType([
          PropTypes.arrayOf(PropTypes.node),
          PropTypes.node
        ])
      };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>

            <Component>
                <div>Компонент списка</div>
                <div>Компонент списка</div>
                <div>Компонент списка</div>
            </Component>

        </CollapseWrapper>
    );
};

export default ChildrenExercise;
