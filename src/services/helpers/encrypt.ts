import bcrypt from 'bcrypt';

export class Encrypt {
    constructor(private password: string, private storedPassword?: string) {
        
    }
    
    async encryptedPassword(): Promise<string>{
        const SALT = await bcrypt.genSalt(10);
        const HASH = await bcrypt.hash(this.password, SALT);
        return HASH;
    }
    async comparePassword(): Promise<boolean>{
        if(this.storedPassword){
            return await bcrypt.compare(this.password, this.storedPassword);
        }
        return false;        
    }
}

