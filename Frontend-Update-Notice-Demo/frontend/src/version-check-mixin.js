import axios from 'axios';

export const versionCheckMixin = {
    data() {
        return {
            localVersion: localStorage.getItem('appVersion') || '1.0.0',
            intervalId: null
        };
    },
    mounted() {
        this.intervalId = setInterval(() => {
            this.checkVersion();
        }, 20000); // 每分钟检查一次
    },
    beforeDestroy() {
        clearInterval(this.intervalId);
    },
    methods: {
        async checkVersion() {
            try {
                const response = await axios.get('http://localhost:3000/version');
                const serverVersion = response.data.version;
                if (serverVersion!== this.localVersion) {
                    // 有新版本，通知用户
                    alert('有新版本上线，请刷新页面！');
                    localStorage.setItem('appVersion', serverVersion);
                    this.localVersion = serverVersion;
                }
            } catch (error) {
                console.error('版本检查出错:', error);
            }
        }
    }
};    