import bcrypt from 'bcrypt';

export class Encrypt {
    constructor(private password: string, private storedPassword?: string) {
        
    }
    
    async encryptedPassword(): Promise<string>{
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(this.password, salt);
        return hash;
    }
    async comparePassword(): Promise<boolean>{
        if(this.storedPassword){
            return await bcrypt.compare(this.password, this.storedPassword);
        }
        return false;        
    }
}

