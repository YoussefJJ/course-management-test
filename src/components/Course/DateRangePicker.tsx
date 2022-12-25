import React from 'react'

interface DateRangePickerProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    startDate: string,
    endDate: string
}

function DateRangePicker(props: DateRangePickerProps) {
  const { onChange, startDate, endDate } = props
  return (
    <div className='d-flex my-2'>
        <input type="datetime-local" onChange={onChange} value={startDate} className='form-control me-md-3' name="startDate"/>
        <input type="datetime-local" onChange={onChange} value={endDate} className='form-control ms-md-3' name="endDate"/>
    </div>
  )
}

export default DateRangePicker