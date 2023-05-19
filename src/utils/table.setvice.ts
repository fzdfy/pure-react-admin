export const getTableData = (request: any) => {
  const fun = async (params: any) => {
    const res = await request(params)
    if (res.data != null) {
      return {
        total: res.total,
        data: res.data,
      }
    } else {
      return {
        total: res?.length,
        data: res,
      }
    }
  }
  return fun
}
