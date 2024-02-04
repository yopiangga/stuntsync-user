
import graphContant from "src/constant/male-graph.json";

export const monthsMale = []
export const min3sdMale = []
export const min2sdMale = []
export const min1sdMale = []
export const nolsdMale = []
export const plus1sdMale = []
export const plus2sdMale = []
export const plus3sdMale = []

graphContant.forEach((item) => {
        monthsMale.push(item.month)
        min3sdMale.push(item.min3sd)
        min2sdMale.push(item.min2sd)
        min1sdMale.push(item.min1sd)
        nolsdMale.push(item.nolsd)
        plus1sdMale.push(item.plus1sd)
        plus2sdMale.push(item.plus2sd)
        plus3sdMale.push(item.plus3sd)
  })