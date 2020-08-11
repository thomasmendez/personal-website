import { Icon } from '../models/Icon';

export class MyInfo {

    public static myIcons: Icon[] = [MyInfo.linkedIn(), MyInfo.github(), MyInfo.email()]

    private static linkedIn(): Icon {
        let icon = new Icon('LinkedIn', 'fa fa-linkedin-square', "https://www.linkedin.com/in/thomas-a-mendez")
        return icon
    }

    private static github(): Icon {
        let icon = new Icon('Github', 'fa fa-github', "https://github.com/thomasmendez")
        return icon
    }

    private static email(): Icon {
        let icon = new Icon('Email', 'fa fa-envelope-square', "mailto:thomasmendez01@gmail.com")
        return icon
    }
}