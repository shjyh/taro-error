export default {
    pages: [
        "entry/launch.page"
    ],
    window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTextStyle: 'black',
        onReachBottomDistance:300
    },
    networkTimeout: {
        request: 60000,
        downloadFile: 45000
    }
}