import configparser

cfg = configparser.ConfigParser()
cfg.read('test.ini')

def get_property(section_val, key_val):
    if section_val is not None and key_val is not None:
        try:
            return cfg.get(str(section_val), str(key_val))
        except Exception as e:
            return e
    else:
        return None