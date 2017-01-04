/**
 * ### Табы сохраненных настроек
 * По умолчанию, приклеены к диалогу, но их можно расположить где угодно
 *
 * @module SchemeSettings
 *
 * Created 19.12.2016
 */

import React, {Component, PropTypes} from "react";
import {Tabs, Tab} from "material-ui/Tabs";
import Subheader from "material-ui/Subheader";
import TabularSection from "../TabularSection";


export default class SchemeSettingsTabs extends Component {

  static propTypes = {
    handleSchemeChange: PropTypes.func.isRequired,
    scheme: PropTypes.object.isRequired
  }

  state = {
    tab_value: 'p'
  }

  handleTabChange = (tab_value) => {
    this.setState({tab_value})
  }

  render() {

    const {handleSchemeChange, scheme} = this.props

    return (

      <Tabs
        value={this.state.tab_value}
        onChange={this.handleTabChange}
      >

        <Tab label="Параметры" value="p">

          <TabularSection
            _obj={scheme}
            _tabular="params"
            minHeight={140}
            deny_add_del={true}
          />

          <TabularSection
            _obj={scheme}
            _tabular="selection"
            minHeight={140}

            rowSelection={{
              showCheckbox: true,
              enableShiftSelect: true,
              selectBy: {
                keys: {
                  rowKey: "field",
                  markKey: "use",
                  values: scheme.used_fields()
                }
              }
            }}

          />

        </Tab>

        <Tab label="Колонки" value="c">

          <TabularSection
            _obj={scheme}
            _tabular="fields"
            deny_add_del={true}
            minHeight={300}

            rowSelection={{
              showCheckbox: true,
              enableShiftSelect: true,
              selectBy: {
                keys: {
                  rowKey: "field",
                  markKey: "use",
                  values: scheme.used_fields()
                }
              }
            }}
          />

        </Tab>

        <Tab label="Группировка" value="g">

          <TabularSection
            _obj={scheme}
            _tabular="dimensions"
            minHeight={140}
          />

          <TabularSection
            _obj={scheme}
            _tabular="resources"
            minHeight={140}
          />

        </Tab>

        <Tab label="Сортировка" value="s">

          <TabularSection
            _obj={scheme}
            _tabular="sorting"
            minHeight={300}
          />

        </Tab>

        <Tab label="Вариант" value="v">

          <div>Вариант</div>

        </Tab>

      </Tabs>
    )
  }

}