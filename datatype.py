class ComplexT:
    real_part = 0
    i_part = 0

    def add(self, b):
        result = ComplexT()
        result.real_part = b.real_part + self.real_part
        result.i_part = b.i_part + self.i_part

        return result

