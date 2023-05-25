import {
  Cascader,
  Checkbox,
  DatePicker,
  FormItem,
  Input,
  NumberPicker,
  PreviewText,
  Radio,
  Select,
  Space,
} from '@formily/antd-v5'
import { createSchemaField } from '@formily/react'
import { Typography } from 'antd'

// import { getAsyncDataSource } from './useAsyncDataSource'

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Select,
    Radio,
    Checkbox,
    DatePicker,
    Cascader,
    PreviewText,
    Space,
    NumberPicker,
    Typography,
  },
  scope: {
    // getAsyncDataSource,
  },
})
export default SchemaField
