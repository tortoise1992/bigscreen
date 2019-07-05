import WebUtilies from 'Utilies/WebUtilies';

export default {
    // 基本情况
    getCollegeBasicInfo: (params) => {
        return WebUtilies.mainPostAction('/college/generalSituation/studentNum', params);
    },
    // 机构设置
    getDeptSet: (params) => {
        return WebUtilies.mainPostAction('/college/generalSituation/getDeptSet', params);
    },
    //  职称分布——学院
    teacherTitle4College: (params) => {
        return WebUtilies.mainPostAction('/college/generalSituation/teacherType4College', params);
    },
    //专业概括
    majorClassify: (params) => {
        return WebUtilies.mainPostAction('/college/generalSituation/majorClassify', params);
    },
    // 查询招生专业
    enrollMajor: (params) => {
        return WebUtilies.mainPostAction('/college/generalSituation/enrollMajor', params);
    },
    //课程数量
    getStudentCountNum:(params) => {
        return WebUtilies.mainPostAction('/college/generalSituation/getStudentCountNum',params)
    },
    // 生师比
    getStudentTeacherThan: (params) => {
        return WebUtilies.mainPostAction('/college/generalSituation/getStudentTeacherThan', params);
    },
    // 图书总量
    getBooks: (params) => {
        return WebUtilies.mainPostAction('/college/generalSituation/getBooks', params);
    }
};